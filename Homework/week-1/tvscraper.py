#!/usr/bin/env python
# Name: Lino Miltenburg
# Student number: 11136375
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    result = []

    for i in dom.by_tag("tr.detailed")[:50]: # Top 50 tv series IMDB.
        genre_list = ""
        actor_list = ""
        total = []
        for j in i.by_tag("td.title")[:1]:
            for title in j.by_tag("a")[:1]:
                total.append(title[0])

            for k in j.by_tag("div.user_rating"):
                for l in k.by_tag("div.rating rating-list"):
                    for m in l.by_tag("span.rating-rating"):
                        for rank in m.by_tag("span.value"):
                            total.append(rank[0])

            for k in j.by_tag("span.genre")[:1]:
                for genre in k.by_tag("a")[:50]:
                    genre_list += str(genre[0])
                    genre_list += ", "
                genre_list = genre_list[:-2]
                total.append(genre_list)

            for k in j.by_tag("span.credit")[:1]:
                for actor in k.by_tag("a")[:50]:
                    actor_list += str(actor[0])
                    actor_list += ", "
                actor_list = actor_list[:-2]
                total.append(actor_list)

            for runtime in j.by_tag("span.runtime")[:1]:
                runtime = str(runtime[0])
                runtime = runtime[:-6]
                total.append(runtime)
        result.append(total)
    return result


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])

    for row in tvseries:
        writer.writerow(row)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)

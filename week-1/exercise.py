# Name : Lino Miltenburg
# Student number : 11136375
'''
This module contains an implementation of split_string.
'''

def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''
    source_length = len(source)
    separators_length = len(separators)
    letter_list = []
    begin = 0

    for i in range (source_length):
        for j in range (separators_length):
            if source[i] == separators[j]:
                word = source[begin:i]
                if len(word) > 0:
                    letter_list.append(word)
                    word = ""
                begin = i + 1

    word = source[begin:len(source)]

    if word != "":
        letter_list.append(word)

    return letter_list

if __name__ == '__main__':
    print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']

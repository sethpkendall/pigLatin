# _Piglatin_
###_Epicodus Pair Project , 9.17.2016_

#### By _Ewa Manek and Seth Kendall_

## Description

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
* Example Input: 3
* Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
* Example Input: i
* Example Output: iay

The program adds "ay" to single-letter words beginning with a vowel regardless of case.
* Example Input: I
* Example Output: Iay

The progam adds "ay" to multi-letter words beginning with a vowel.
* Example Input: apple
* Example Output: appleay

For words beginning with a single consonant, the program moves the first letter to the end and adds "ay."
* Example Input: tack
* Example Output: acktay

For words beginning with multiple consonants, the program moves the first grouping of consecutive consonants to the end and adds "ay."
* Example Input: track
* Example Output: acktray

For words beggining with the letter "y" the letter "y" is considered a consonant.
* Example Input: Yak
* Example Output: akyay

For words beginning with "qu," "qu" is considered a consonant group.
* Example Input: quack
* Example Output: ackquay

If the first group of consonants includes "qu" the "qu" is also treated as a part of the consonant group.
* Example Input: squeal
* Example Output: ealsquay

For multiple word input the program will apply the above rules to each word and return a phrase translated entirely into piglatin.
* Example Input: the grass is always greener
* Example Output: ethay assgray isay alwaysay eenergray

For multiple word input the program will apply the above rules regardless of capitalization.
* Example Input: THE GRASS IS ALWAYS GREENER
* Example Output: ethay assgray isay alwaysay eenergray

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

## Known Bugs
No known bugs.

## Contact Information
Contact me at sethpkendall@gmail.com

## Licensing

*This product can be used in accordance with the provisions under its MIT license.*

copyright (c) 2016 **_Ewa Manek and Seth Kendall_**

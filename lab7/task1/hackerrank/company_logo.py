
import math
import os
import random
import re
import sys



if __name__ == '__main__':
    s = input()
    a = {}
    for i in s:
        if i not in a:
            a[i] = 1
        else:
            a[i] += 1
for k, v in sorted(a.items(), key=lambda item: (-item[1], item[0]))[0:3]:
    print(k, v)


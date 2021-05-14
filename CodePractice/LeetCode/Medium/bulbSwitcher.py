#https://leetcode.com/problems/bulb-switcher-iv/
def switcher(target):
    pattern = []
    switchCounter = 0
    for i in range(len(target)):
        pattern.append(0)
    while ",".join(pattern) != int(target):
        
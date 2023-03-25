if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    m = max(arr)
    arr = [x for x in arr if x != m]
    print(max(arr)) 

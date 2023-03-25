# Enter your code here. Read input from STDIN. Print output to STDOUT
n,m = input().split()
l = list(map(int, input().split()))
A = set(map(int, input().split()))
B = set(map(int, input().split()))
ans = 0   
for i in l:
    if i in A:
        ans += 1
    elif i in B:
        ans -= 1
        
print(ans)


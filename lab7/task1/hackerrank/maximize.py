from itertools import product

k, m = map(int, input().split())
ans = 0
li = []
for _ in range(k):
    li.append(list(map(lambda x: int(x)**2, input().split()[1:])))
ans_l = list(sum(x)%m for x in product(*li))
print(max(ans_l))

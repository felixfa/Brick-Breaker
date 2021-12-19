def comp(array1, array2):
    answer = False
    n = 0
    for i in range(len(array2)):
        for j in range(len(array1)):
            if array2[i] == array1[j] * array1[j]:
                n += 1
                print(n)
                break
    if n == len(array1) or len(array2):
        answer = True

    return answer

a1 = [121, 144, 19, 161, 19, 144, 19, 11,11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19,11*11,19*19]

print(comp(a1, a2))

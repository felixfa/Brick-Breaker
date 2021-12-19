def red_knight(N, P):
    # Define position of red knight and pawns in (Horizontal,Vertikal)
    red = [0, N]
    white = [P, False]
    black = [P, True]
    move = 0

    while red[0] != white[0]:
        move += 1
        red[0] += 2
        if red[1] == 0:
            red[1] =1
        else:
            red[1] =0
        white[0] += 1
        black[0] += 1
        print(red[1])

    if red[1] == True:
        tuple = ("Black", red[0])
    else:
        tuple = ("White", red[0])

    return tuple



print(red_knight(0, 7))

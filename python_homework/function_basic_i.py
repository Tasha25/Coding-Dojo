# #1
# def a():
#     return 5
# print(a())
#
# //5 *correct
#========================

#2
# def a():
#     return 5
# print(a()+a())

#//10
#==========================

#3
# def a():
#     return 5
#     return 10
# print(a())

#//5 *correct
#=========================

#4
# def a():
#     return 5
#     print(10)
# print(a())

# function will return 5 and stop *correct
#=====================

#5
# def a():
#     print(5)
# x = a()
# print(x)

# x is 5
# //5
# 5
# None why?  *ASK DURING OFFICE HOURS

#=====================

#6
# def a(b,c):
#     print(b+c)
# print(a(1,2) + a(2,3))

#TypeError: unsupported operand type(s) for +: 'NoneType' and 'NoneType'
# 3
# 5
# 8

#=====================

#7
# def a(b,c):
#     return str(b)+str(c)
# print(a(2,5))
#
# 25

#=====================

#8
# def a():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(a())

# 100
# 10 *correct*


#=====================
#9
# def a(b,c):
#     if b<c:
#         return 7
#     else:
#         return 14
#     return 3
# print(a(2,3))
# print(a(5,3))
# print(a(2,3) + a(5,3))

# 7
# 14
# 21
#=====================

#10
# def a(b,c):
#     return b+c
#     return 10
# print(a(3,5))
# b = 500
# print(b)

#Ans *correct*
# 8
# 500
#=====================
#11
# def a():
#     b = 300
#     print(b)
# print(b)
# a()
# print(b)
# b = 500
# print(b)

# #Ans *wrong*
# None
# 300
# none
# 300

# NameError: name 'b' is not defined
#=====================
#12
#
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# a()
# print(b)
# b = 500
# print(b)


#Ans *correct*
# NameError: name 'b' is not defined

#=====================

#13
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# b=a()
# print(b)

#Ans
#Ans *correct*
# NameError: name 'b' is not defined

#=====================

#14
# def a():
#     print(1)
#     b()
#     print(2)

#Ans *correct*
# nothing
#=====================

#15
# def b():
#     print(3)
# a()

#Ans *IDK*
# NameError: name 'a' is not defined
#=====================

#16
# def a():
#     print(1)
#     x = b()
#     print(x)
#     return 10


#Ans
# nothing
#=====================

#17
# def b():
#     print(3)
#     return 5
# y = a()
# print(y)


# #Ans
# NameError: name 'a' is not defined
#=====================

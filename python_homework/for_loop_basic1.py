# 1. Basic - Print all the numbers/integers from 0 to 150.
# i = 0
# while i<=150:
#     print(i)
#     i+=1

# 2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000,000.
# i = 5
# while i <=1000000:
#     if i%5==0:
#         print(i)
#     i+=1


# 3. Counting, the Dojo Way - Print integers 1 to 100.  If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
# version 1
# i = 1
# while i <50:
#     # is i divisible by 5
#     if i%5 == 0:
#         print("Coding")
#         if i%10 == 0:
#             print("Dojo")
#     else:
#         print("i:", i)
#     #     print i
#     i+=1
#
# version 2
# i = 0
# while i <= 100:
#   if i % 10 == 0:
#     print("Coding Dojo")
#   elif i % 5 == 0:
#     print("Coding")
#   else:
#     print(i)
#   i += 1


#any if statements can stand alone
# 4. Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
# i = 0
# sum = 0
# while i <= 500000:
#     if i % 2 != 0:
#         sum = sum + i
#     i += 1
# print(sum)


# 5. Countdown by Fours - Print positive numbers starting at 2018, counting down by fours (exclude 0).
# i = 2018
# while i >= 1:
#     print (i)
#     i -=4
#


# 6. Flexible Countdown - Based on earlier "Countdown by Fours", given lowNum, highNum, mult, print multiples of mult from lowNum to highNum, using a FOR loop.  For (2,9,3), print 3 6 9 (on successive lines)
#
# def countdown(lowNum,highNum, mult):
#     for i in range(highNum, lowNum-1, -1):
# #range build alist from the first arg to the last arg
# #exclusive of second arg eg: lowNum
#         if i % mult == 0:
#             print(i)
#
#
# countdown(2,9,3)
#
#
# A common mistake?

#7
# list = [3,5,1,2]
# for i in list:
#     print(i)
#
#
# # 3
# # 5
# # 1
# # 2
#

#8
# list = [3,5,1,2]
# for i in range(list):
#     print(i)

#TypeError: 'list' object cannot be interpreted as an integer

#9
# list = [3,5,1,2]
# for i in range(len(list)):
#     print(i)
#
# 0
# 1
# 2
# 3

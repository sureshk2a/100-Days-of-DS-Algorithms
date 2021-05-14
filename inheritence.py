class Animal:
    def speak(self):
        print("Animal Speaking")

class Dog(Animal): #Inheritance
    def bark(self):
        print("Dog Barking")
    def speak(self): #Method Overriding
        print("Dog's won't speak, it barks")

class Cat(Dog):
    def scratch(self):
        print("Cat scratched")

class Employee:
    __count = 0
    



d = Cat()
d.bark()
d.speak()
d.scratch()

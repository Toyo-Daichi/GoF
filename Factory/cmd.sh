#!/bin/bash

javac *.java
java Main

rm *.class
rm */*.class

echo 'Normal END'

exit

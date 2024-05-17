#!/bin/bash

javac *.java
java Main text
java Main html

rm *.class

echo 'Normal END'

exit

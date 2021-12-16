#!/bin/bash

if [ -d "./node_modules" ] 
then
    echo "Node modules exists" 
else
    yarn
fi
#!/bin/bash
clear
OX=11
OY=11
R=10
OX=31
OY=31
R=20
for ((t=0; t<90; t++)); do
  # "...*2" compensate terminal font width
  x=$(bc -l <<< "$R*c($t/360*2*a(1)*4)*2")
  x=${x%.*}
  y=$(bc -l <<< "$R*s($t/360*2*a(1)*4)")
  y=${y%.*}
  echo -ne "\e[$((OY - y));$((OX - x))H1"
  echo -ne "\e[$((OY - y));$((OX + x))H2"
  echo -ne "\e[$((OY + y));$((OX - x))H3"
  echo -ne "\e[$((OY + y));$((OX + x))H4"
done
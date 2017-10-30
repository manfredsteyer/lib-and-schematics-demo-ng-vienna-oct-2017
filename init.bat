xcopy schematics\logger-schematic\*.* application\node_modules\logger-schematic /s /e /EXCLUDE:schematics\logger-schematic\blacklist.txt 
cd library\src
call npm link
cd ..\..\application
call npm link my-lib



PACKAGES_MODULES=(`ls packages | grep -v 'node_modules'`) 

for i in "${PACKAGES_MODULES[@]}"
  do
    : 
    echo -e "$1 \n//npm.pkg.github.com/:_authToken= $2 \nalways-auth=true"> $3/packages/${i}/.npmrc
  done

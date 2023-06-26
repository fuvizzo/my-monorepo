PACKAGES_MODULES=(`ls packages | grep -v 'node_modules'`) 

for i in "${PACKAGES_MODULES[@]}"
  do
    : 
    echo -e "@fuvizzo:registry=https://npm.pkg.github.com \n//npm.pkg.github.com/:_authToken= $1 \nalways-auth=true"> $2/packages/${i}/.npmrc
  done

#!/usr/bin/env bash
PKG_NAME=image-compare
USER=uvcdat
if [ "$TRAVIS_OS_NAME" = "linux" ]; then wget https://repo.continuum.io/miniconda/Miniconda-latest-Linux-x86_64.sh -O miniconda.sh; fi
if [ "$TRAVIS_OS_NAME" = "osx" ]; then wget https://repo.continuum.io/miniconda/Miniconda-latest-MacOSX-x86_64.sh -O miniconda.sh; fi
export PATH="$HOME/miniconda/bin:$PATH"
bash miniconda.sh -b -p $HOME/miniconda
conda config --set always_yes yes --set changeps1 no
conda update -y -q conda
if [ `uname` == "Linux" ]; then
    OS=linux-64
else
    OS=osx-64
fi

mkdir ${HOME}/conda-bld
conda config --set anaconda_upload no
conda install conda-build anaconda-client
export CONDA_BLD_PATH=${HOME}/conda-bld
cd conda-recipes
export VERSION=$(more image-compare/meta.yaml | grep version | awk '{print $2}')
conda build image-compare -c conda-forge
anaconda -t $CONDA_UPLOAD_TOKEN upload -u $USER -l nightly $CONDA_BLD_PATH/$OS/$PKG_NAME-$VERSION-py27_0.tar.bz2 --force


from setuptools import setup
import subprocess

subprocess.call(["npm", "run", "build"])
subprocess.call(["cp", "jsbuild/image-compare.js", "image_compare/resources/image-compare.min.js"])

setup(
    name='image-compare',
    version='0.1',
    description='Utility for generating HTML pages comparing images',
    url='http://github.com/uv-cdat/image-compare',
    author='Sam Fries',
    author_email='fries2@llnl.gov',
    license='MIT',
    packages=['image_compare'],
    install_requires=['Jinja2'],
    scripts=["scripts/compare_images"],
    package_data={"image_compare": ["resources/image-compare.min.js", "resources/diff.html"]}
)

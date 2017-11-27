ignore = -x .\* Makefile \*.zip
obj = tabIdx.zip

all: $(obj)

$(obj): *.json js/*.js
	zip -r $@ . $(ignore)

clean:
	rm -f $(obj)

all: pdf

NAME=portfolio

pdf:
	pandoc -s -N \
		--pdf-engine=xelatex \
	 	-f markdown-implicit_figures \
		-o $(NAME).pdf $(NAME).md

html:
	pandoc -s -N \
		-f markdown -t html -o $(NAME).html $(NAME).md

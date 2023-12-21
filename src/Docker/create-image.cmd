docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyushmyush/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kyushmyush/app ../..

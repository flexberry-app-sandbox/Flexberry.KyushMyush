docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyushmyush-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyushmyush-java/app ../../..

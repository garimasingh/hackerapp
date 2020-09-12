# hackerapp
This is a simple node js application with a single api /version. To build and run this application locally in docker

1. Clone this repository
git clone https://github.com/garimasingh/hackerapp.git

2. Build docker 
docker build -t hackerapp -f Dockerfile .

3. Run locally 
docker run -d -p 80:9000 hackerapp npm start

4. Test api /version http://localhost/version. Output should be similar to below.
{
  "myapplication": [
    {
      "version": "1.0.0",
      "lastcommitsha": "0a97646cf73ba393fe806bde2b58b0c00cbeac9e",
      "description": "pre-interview technical test"
    }
  ]
}


## Instalacja

**npm install**

## Uruchomienie

Produkcyjnie: w folderze projektu należy wykonać komendę **webpack**, po prawidłowym zbudowaniu uruchomić **npm run build** a następnie uruchomić **npm start**

Development: w folderze projektu należy uruchomić **2** konsole, w jednej wpisać **npm run nodemon** a w drugiej **webpack -w**

## Port

Server jest uruchamiany na porcie **3000** w celu zmiany portu należy zmienić w folderze **bin/www** linię *let port = normalizePort(process.env.PORT || '3000');* zastępując **3000** numerem wolnego portu

## Modyfikacje

W razie potrzeby zmiany kodu w trakcie gdy komendy **npm run nodemon** i **webpack** są uruchomione wystarczy po paru sekundach przeładować stronę *webpack* i *nodemon* nasłuchują zmian
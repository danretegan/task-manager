# Redux toolkit

## 1) Instalare: 
- `npm install @reduxjs/toolkit`
- `npm install @reduxjs/toolkit react-redux`

## 2) Creare slice-uri: 
Impărțim starea în "slice-uri" logice care să reprezinte diferite aspecte ale stării aplicației. Fiecare slice trebuie să facă referire la gestionarea unei părți specifice a stării și a logicii asociate.

## 3) Definirea reducer-ului: 
Folosim funcția `createSlice` pentru a defini reducer-ul și acțiunile asociate slice-ului. Aceasta permite definirea reducer-ului și a acțiunilor într-o manieră simplificată, fără a fi nevoie să ne ocupam manual de generarea constantelor și a creatorilor de acțiuni.

## 4) Crearea store: 
Folosim funcția `configureStore` pentru a crea magazinul (store) Redux. Aceasta automatizează multe aspecte ale configurării magazinului, cum ar fi adăugarea reducer-ilor și gestionarea middleware-ului.

## 5) Conectarea componentelor:
Folosim componenta `Provider` furnizată de Redux pentru a înveli aplicația React și a-i oferi acces la magazinul Redux.

## 6) Utilizarea hook-urilor Redux: 
Folosim hook-urile furnizate de Redux Toolkit, precum `useDispatch` și `useSelector` pentru a trimite (`dispatch`) acțiuni către magazin (store) și pentru a accesa starea aplicației în componente.

## 7) Dispatch acțiuni: 
Folosim metoda `dispatch` pentru a trimite acțiuni către reducer-urile definite și pentru a actualiza starea aplicației.

## 8) Accesarea stării: 
Folosim hook-ul `useSelector` pentru a accesa starea din componente și pentru a reacționa la schimbările de stare.

## Concluzii:
Prin utilizarea Redux Toolkit putem gestiona starea aplicației într-un mod eficient și fără a fi necesar să scriem o mulțime de cod repetitiv. Aceasta oferă un set de unelte puternice pentru dezvoltarea aplicațiilor Redux într-un mod simplificat și productiv.

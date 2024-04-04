# RMTC-JS

I find quite boring searching for my phone to know if my bus is closeby. So I made this project to allow me to do that in my terminal.

## How to use

### Instalation

This is a node applicatin, so you need to install the dependencies.

You can use your favorite package manager.

```bash
pnpm i
```

```bash
node index.js 31530

┌─────────┬───────┬───────────────────────────┬─────────┬───────────┐
│ (index) │ linha │          destino          │ proximo │ seguinte  │
├─────────┼───────┼───────────────────────────┼─────────┼───────────┤
│    0    │  403  │ 'T BANDEIRAS - VIA ALPES' │    4    │    38     │
│    1    │  401  │        'T PRACA A'        │   32    │    36     │
│    2    │  405  │         'CENTRO'          │   45    │ undefined │
└─────────┴───────┴───────────────────────────┴─────────┴───────────┘
```

## Disclaimer

I am not associated with RMTC. This is just a personal project to make my life easier.
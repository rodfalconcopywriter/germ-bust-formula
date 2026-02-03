

## Alteração de Preço para R$9,90

### Objetivo
Atualizar o valor exibido de R$7 para R$9,90 em todos os botões de CTA do site.

### Arquivos a serem alterados

| Arquivo | Alteração |
|---------|-----------|
| `src/components/HeroSection.tsx` | Mudar "RESOLVER AGORA POR R$7" para "RESOLVER AGORA POR R$9,90" |
| `src/components/FinalCTASection.tsx` | Mudar "RESOLVER AGORA POR R$7" para "RESOLVER AGORA POR R$9,90" |

### Detalhes Técnicos

**HeroSection.tsx (linha 48)**
```text
Antes: RESOLVER AGORA POR R$7
Depois: RESOLVER AGORA POR R$9,90
```

**FinalCTASection.tsx (linha 17)**
```text
Antes: RESOLVER AGORA POR R$7
Depois: RESOLVER AGORA POR R$9,90
```

### Observação
Os outros botões de CTA ("BAIXAR A FÓRMULA 3P" e "QUERO ACESSAR AGORA") não mencionam o preço, então não precisam de alteração.


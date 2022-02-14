# LoanCalculator

Created with CodeSandbox

Čas: 7 hodin

Možné zlepšení:

1. Rozdělit componenty jako AmountInput a LengthInput na functional a render conpomenty.
2. Načítat initialStateValue skrze useEffect
3. Nejspíše by se dalo lépe pracovat se states ve props flow Container->AmountInput/LengthInput->Slider/NumberInput

Nejvíce časově náročné bylo připravit endpoint. Potýkal jsem se s problémy s CORS a HTTP na svém "experiment" serveru, kde byl připravený PHP/nginx docker container -> Musel jsem si připravit prostředí na jiném serveru from scratch na doméně s certifikátem.

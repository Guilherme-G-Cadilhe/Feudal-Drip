import { AnyAction } from "redux"; // Interface

// AC - Action Creator
// Interface que define duas funções internas, uma que retorna em uma string sendo o tipo da ação
// e a outra sendo uma função customizada que valida o tipo da ação retornada
type Matchable<AC extends () => AnyAction> = AC & {
  //ReturnType é padrão do Typescript
  type: ReturnType<AC>["type"]; //Pega a propriedade Type de dentro do Action
  match(action: AnyAction): action is ReturnType<AC>;
};
// Tipo de retorno para ações com só o tipo e sem payload
export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
// Tipo de retorno para ações com tipo e payload
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};
// Separando ação sem Payload e ação com Payload
export type Action<T> = {
  type: T;
};

// Overload de função que define o retorno se função for chamada com Type e Payload
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
// Overload para quando a função só tiver o Type
export function createAction<T extends string>(type: T, payload: void): Action<T>;
// Implementação do retorno efetivo da função
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

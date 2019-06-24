export function test(state: any = { count: 1 }, action: any) {
  switch (action.type) {
    case "TEST":
      state.count += action.payload;
      break;
  }
  return { ...state };
}
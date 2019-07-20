export function test(state: any = { count: 1 }, action: any): any {
  switch (action.type) {
    case 'TEST':
      state.count += action.payload;
      break;
    default:
      break;
  }
  return { ...state };
}

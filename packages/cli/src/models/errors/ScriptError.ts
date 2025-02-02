export default class ScriptError extends Error {
  public stack: any;
  public cb: () => void;

  public constructor(
    { message, stack }: { message: string; stack: string },
    cb: () => void,
  ) {
    super(message);
    this.stack = stack;
    this.cb = cb;
  }
}

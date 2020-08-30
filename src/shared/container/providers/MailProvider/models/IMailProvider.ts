export default interface ImailProvider {
  sendMail(to: string, body: string): Promise<void>;
}

declare module "*.svg" {
  const svg: (props: React.SVGProps<SVGSVGElement>) => React.ReactSVGElement
  export default svg
}

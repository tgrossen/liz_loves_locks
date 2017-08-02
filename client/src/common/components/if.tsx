interface IfProps {
  condition: boolean
  children: any
}

const If = (props: IfProps) => {
  return !!props.condition ? props.children : null
}

export default If
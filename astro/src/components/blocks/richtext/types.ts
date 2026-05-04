export interface LexicalNode {
  type: string
  version: number
  [key: string]: any
}

export interface LexicalRoot {
  type: 'root'
  children: LexicalNode[]
}

export interface LexicalDoc {
  root: LexicalRoot
}

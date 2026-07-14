import * as OpenCC from 'opencc-js'

let converter: ((text: string) => string) | null = null

export function toSimplifiedChinese(text: string): string {
  if (!text)
    return text
  try {
    if (!converter) {
      converter = OpenCC.Converter({ from: 'tw', to: 'cn' })
    }
    return converter(text)
  }
  catch {
    return text
  }
}

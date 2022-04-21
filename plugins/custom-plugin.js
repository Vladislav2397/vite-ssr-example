import pug from 'pug'
import bem from 'pug-bem'

bem.b = true

export const customPlugin = () => {
    const regexp = /\.vue/
    return {
        name: 'CustomPlugin',
        transform(src, id) {
            if (regexp.test(id)) {
                const startIndex = src.indexOf('<template lang="pug">')
                const endIndex = src.indexOf('</template>')

                if (startIndex >= 0 || endIndex >= 0) {
                    let str = src.slice(startIndex, endIndex)

                    console.log('indexes', startIndex, endIndex)

                    str = str.replace(' lang="pug"', '')
                    str = str.concat('</template>')

                    const compiledString = pug.compile(str, {
                        plugins: [bem],
                    })

                    const code = src.replace(/<template.*<\/template>/s, `${compiledString()}`)

                    return {
                        code,
                        map: null,
                    }
                }
            }
        },
    }
}
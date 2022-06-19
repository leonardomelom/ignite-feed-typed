export const profileImage = 'http://lorempixel.com.br/500/500/?1'

export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://lorempixel.com.br/500/500/?1',
      name: 'John Doe',
      role: 'Admin @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      }
    ],
    publishedAt: new Date('2022-05-03 22:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: profileImage,
      name: 'Ana Julia',
      role: 'Ui Designer @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },
      {
        type: 'link',
        content: ' #novoprojeto'
      },
      {
        type: 'link',
        content: ' #rocketseat'
      },
      {
        type: 'link',
        content: ' #nlw'
      }
    ],
    publishedAt: new Date('2022-05-03 22:00:00')
  }
]

import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Image, Text, View, } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, GoudyBookletter1911_400Regular } from '@expo-google-fonts/goudy-bookletter-1911';

export default function App() {
  
  let [fontsLoaded] = useFonts(
    GoudyBookletter1911_400Regular
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Eddie do SENAC</Text>
      <Text style={styles.titulo2}>Voce tem um projeto integrador</Text>
      <Text style={styles.titulo3}>Quer envolver novas áreas</Text>
      <Text style={styles.titulo4}>Entao vamos encontrar os alunos aqui</Text>
      <FlatList
      data={pessoas}
      renderItem={({item})=>

      <View style={styles.pessoas}>
        <View style={styles.nome}>
      <Text>{item.nome}</Text>
        
        <Text>{item.nome}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.periodo}</Text>
        <Text>{item.turma}</Text>
        <Text>{item.gosto}</Text>
        <Text>{item.bio}</Text>
        <Image style={styles.img} source={item.img}/>
      </View>
       </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'right',
    marginTop:25
  },

 img:{
   width:50,
   height:50,
   borderRadius:500,
   alignItems:'center',
   marginTop:20,
   marginBottom:20,
 },
 pessoas:{

 },
 
 titulo1:{
   fontSize:45,
   marginTop:30

 }
});

const pessoas = [  
  {
  uid:159,
  nome:'Danilo Soares',
  curso:'Técnico de Informática',
  periodo:'Manhã',
  turma:'Ti10',
  gosto:'Hardware,Front-end,Redes,PHP', 
  bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
  img:require('./assets/fotosdeperfil/eddie.jpg')
  
  }, 
  {
  uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:require('./assets/fotosdeperfil/chris.jpg')
  },
  {
    uid:69,
    nome:'sasuke',
    curso:'ninja',
    periodo:'manhã',
    turma:'ti12',
    gosto:'sofrer',
    bio:'matar um certo alguem é meu sonho',
    img:require('./assets/fotosdeperfil/bruno.jpg')
  },
  {
  uid:10,
  nome:'Washington barreto',
  curso: 'Técnico de informática',
  periodo: 'Manhã',
  turma: 'Ti10',
  gosto: 'Hardware, Back-End, Redes, C#',
  bio: 'Lorem Ipsum is simply dummy text of the printing andetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
  img:require('./assets/fotosdeperfil/shrek.jpg')
},
{
uid:850,
    nome:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img:require('./assets/fotosdeperfil/washington.jpg')
},
{
uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img: require('./assets/fotosdeperfil/bosonaro.jpg')
},
{
  uid:420,
  nome:'Caio elias',
  curso:'Tecnico de informatica',
  periodo:'Manhã',
  turma:'TI10m',
  gosto:'Hardware,Banco de dados,C#',
  bio:'garoto de programa junior',
  img:require('./assets/fotosdeperfil/caio.jpg')
  },
  {
    uid:161,
    nome:'Silvio Santos',
    curso:'Gestão de negócios',
    periodo: 'Manhã',
    turma:'TI10m',
    gosto:'Apresentador,Administração',
    bio:'Curto a vida de um geito bem leve, gosto de sair com a minha familia aos finais de semana, sou comunicador e gosto de ser apresentador de TV esse é o meu forte',
    img:require('./assets/fotosdeperfil/silvio.jpg')
  },
  {
  uid:158,
  nome:'homem aranha',
  curso:'escalada',
  periodo:'manhã',
  turma:'ti19',
  gosto:'subir parede',
  bio:'dormir acordar trabalhar banho e comer e dps tudo de novo',
  img:require('./assets/fotosdeperfil/aranha.jpg')
  },
  {
    uid:159,
    nome:'Cauãzinho chavão',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto:'Livia, hosana, laura, Mol e casadas', 
    bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    img:require('./assets/fotosdeperfil/caua.jpg')
  }
]
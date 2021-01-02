const correctAudioSrc = './src/assets/data/audio/correct.mp3';

const errorAudioSrc = './src/assets/data/audio/error.mp3';

const failureAudioSrc = './src/assets/data/audio/failure.mp3';

const successAudioSrc = './src/assets/data/audio/success.mp3';

const categories: string[] = ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'City', 'Health'];

const cards: { word: string, translation: string, image: string, audioSrc: string }[][] = [
    [
        {
            word: 'cry',
            translation: 'плакать',
            image: './src/assets/data/img/cry.jpg',
            audioSrc: './src/assets/data/audio/cry.mp3',
        },
        {
            word: 'dance',
            translation: 'танцевать',
            image: './src/assets/data/img/dance.jpg',
            audioSrc: './src/assets/data/audio/dance.mp3',
        },
        {
            word: 'dive',
            translation: 'нырять',
            image: './src/assets/data/img/dive.jpg',
            audioSrc: './src/assets/data/audio/dive.mp3',
        },
        {
            word: 'draw',
            translation: 'рисовать',
            image: './src/assets/data/img/draw.jpg',
            audioSrc: './src/assets/data/audio/draw.mp3',
        },
        {
            word: 'fish',
            translation: 'ловить рыбу',
            image: './src/assets/data/img/fish.jpg',
            audioSrc: './src/assets/data/audio/fish.mp3',
        },
        {
            word: 'fly',
            translation: 'летать',
            image: './src/assets/data/img/fly.jpg',
            audioSrc: './src/assets/data/audio/fly.mp3',
        },
        {
            word: 'hug',
            translation: 'обнимать',
            image: './src/assets/data/img/hug.jpg',
            audioSrc: './src/assets/data/audio/hug.mp3',
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: './src/assets/data/img/jump.jpg',
            audioSrc: './src/assets/data/audio/jump.mp3',
        },
    ],
    [
        {
            word: 'open',
            translation: 'открывать',
            image: './src/assets/data/img/open.jpg',
            audioSrc: './src/assets/data/audio/open.mp3',
        },
        {
            word: 'play',
            translation: 'играть',
            image: './src/assets/data/img/play.jpg',
            audioSrc: './src/assets/data/audio/play.mp3',
        },
        {
            word: 'point',
            translation: 'указывать',
            image: './src/assets/data/img/point.jpg',
            audioSrc: './src/assets/data/audio/point.mp3',
        },
        {
            word: 'ride',
            translation: 'ездить',
            image: './src/assets/data/img/ride.jpg',
            audioSrc: './src/assets/data/audio/ride.mp3',
        },
        {
            word: 'run',
            translation: 'бегать',
            image: './src/assets/data/img/run.jpg',
            audioSrc: './src/assets/data/audio/run.mp3',
        },
        {
            word: 'sing',
            translation: 'петь',
            image: './src/assets/data/img/sing.jpg',
            audioSrc: './src/assets/data/audio/sing.mp3',
        },
        {
            word: 'skip',
            translation: 'пропускать, прыгать',
            image: './src/assets/data/img/skip.jpg',
            audioSrc: './src/assets/data/audio/skip.mp3',
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: './src/assets/data/img/swim.jpg',
            audioSrc: './src/assets/data/audio/swim.mp3',
        },
    ],
    [
        {
            word: 'cat',
            translation: 'кот',
            image: './src/assets/data/img/cat.jpg',
            audioSrc: './src/assets/data/audio/cat.mp3',
        },
        {
            word: 'chick',
            translation: 'цыплёнок',
            image: './src/assets/data/img/chick.jpg',
            audioSrc: './src/assets/data/audio/chick.mp3',
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: './src/assets/data/img/chicken.jpg',
            audioSrc: './src/assets/data/audio/chicken.mp3',
        },
        {
            word: 'dog',
            translation: 'собака',
            image: './src/assets/data/img/dog.jpg',
            audioSrc: './src/assets/data/audio/dog.mp3',
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: './src/assets/data/img/horse.jpg',
            audioSrc: './src/assets/data/audio/horse.mp3',
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: './src/assets/data/img/pig.jpg',
            audioSrc: './src/assets/data/audio/pig.mp3',
        },
        {
            word: 'rabbit',
            translation: 'кролик',
            image: './src/assets/data/img/rabbit.jpg',
            audioSrc: './src/assets/data/audio/rabbit.mp3',
        },
        {
            word: 'sheep',
            translation: 'овца',
            image: './src/assets/data/img/sheep.jpg',
            audioSrc: './src/assets/data/audio/sheep.mp3',
        },
    ],
    [
        {
            word: 'bird',
            translation: 'птица',
            image: './src/assets/data/img/bird.jpg',
            audioSrc: './src/assets/data/audio/bird.mp3',
        },
        {
            word: 'fish',
            translation: 'рыба',
            image: './src/assets/data/img/fish1.jpg',
            audioSrc: './src/assets/data/audio/fish.mp3',
        },
        {
            word: 'frog',
            translation: 'жаба',
            image: './src/assets/data/img/frog.jpg',
            audioSrc: './src/assets/data/audio/frog.mp3',
        },
        {
            word: 'giraffe',
            translation: 'жирафа',
            image: './src/assets/data/img/giraffe.jpg',
            audioSrc: './src/assets/data/audio/giraffe.mp3',
        },
        {
            word: 'lion',
            translation: 'лев',
            image: './src/assets/data/img/lion.jpg',
            audioSrc: './src/assets/data/audio/lion.mp3',
        },
        {
            word: 'mouse',
            translation: 'мышь',
            image: './src/assets/data/img/mouse.jpg',
            audioSrc: './src/assets/data/audio/mouse.mp3',
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: './src/assets/data/img/turtle.jpg',
            audioSrc: './src/assets/data/audio/turtle.mp3',
        },
        {
            word: 'dolphin',
            translation: 'дельфин',
            image: './src/assets/data/img/dolphin.jpg',
            audioSrc: './src/assets/data/audio/dolphin.mp3',
        },
    ],
    [
        {
            word: 'skirt',
            translation: 'юбка',
            image: './src/assets/data/img/skirt.jpg',
            audioSrc: './src/assets/data/audio/skirt.mp3',
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: './src/assets/data/img/pants.jpg',
            audioSrc: './src/assets/data/audio/pants.mp3',
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: './src/assets/data/img/blouse.jpg',
            audioSrc: './src/assets/data/audio/blouse.mp3',
        },
        {
            word: 'dress',
            translation: 'платье',
            image: './src/assets/data/img/dress.jpg',
            audioSrc: './src/assets/data/audio/dress.mp3',
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: './src/assets/data/img/boot.jpg',
            audioSrc: './src/assets/data/audio/boot.mp3',
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: './src/assets/data/img/shirt.jpg',
            audioSrc: './src/assets/data/audio/shirt.mp3',
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: './src/assets/data/img/coat.jpg',
            audioSrc: './src/assets/data/audio/coat.mp3',
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: './src/assets/data/img/shoe.jpg',
            audioSrc: './src/assets/data/audio/shoe.mp3',
        },
    ],
    [
        {
            word: 'sad',
            translation: 'грустный',
            image: './src/assets/data/img/sad.jpg',
            audioSrc: './src/assets/data/audio/sad.mp3',
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: './src/assets/data/img/angry.jpg',
            audioSrc: './src/assets/data/audio/angry.mp3',
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: './src/assets/data/img/happy.jpg',
            audioSrc: './src/assets/data/audio/happy.mp3',
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: './src/assets/data/img/tired.jpg',
            audioSrc: './src/assets/data/audio/tired.mp3',
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: './src/assets/data/img/surprised.jpg',
            audioSrc: './src/assets/data/audio/surprised.mp3',
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: './src/assets/data/img/scared.jpg',
            audioSrc: './src/assets/data/audio/scared.mp3',
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: './src/assets/data/img/smile.jpg',
            audioSrc: './src/assets/data/audio/smile.mp3',
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: './src/assets/data/img/laugh.jpg',
            audioSrc: './src/assets/data/audio/laugh.mp3',
        },
    ],
    [
        {
            word: 'hotel',
            translation: 'отель',
            image: './src/assets/data/img/hotel.jpg',
            audioSrc: './src/assets/data/audio/hotel.mp3',
        },
        {
            word: 'railway station',
            translation: 'железнодорожная станция',
            image: './src/assets/data/img/railway_station.jpg',
            audioSrc: './src/assets/data/audio/railway_station.mp3',
        },
        {
            word: 'traffic light',
            translation: 'светофор',
            image: './src/assets/data/img/traffic_light.jpg',
            audioSrc: './src/assets/data/audio/traffic_light.mp3',
        },
        {
            word: 'hospital',
            translation: 'больница',
            image: './src/assets/data/img/hospital.jpg',
            audioSrc: './src/assets/data/audio/hospital.mp3',
        },
        {
            word: 'cinema',
            translation: 'кинотеатр',
            image: './src/assets/data/img/cinema.jpg',
            audioSrc: './src/assets/data/audio/cinema.mp3',
        },
        {
            word: 'airport',
            translation: 'аэропорт',
            image: './src/assets/data/img/airport.jpg',
            audioSrc: './src/assets/data/audio/airport.mp3',
        },
        {
            word: 'school',
            translation: 'школа',
            image: './src/assets/data/img/school.jpg',
            audioSrc: './src/assets/data/audio/school.mp3',
        },
        {
            word: 'factory',
            translation: 'завод',
            image: './src/assets/data/img/factory.jpg',
            audioSrc: './src/assets/data/audio/factory.mp3',
        },
    ],
    [
        {
            word: 'allergy',
            translation: 'аллергия',
            image: './src/assets/data/img/allergy.jpg',
            audioSrc: './src/assets/data/audio/allergy.mp3',
        },
        {
            word: 'doctor',
            translation: 'доктор',
            image: './src/assets/data/img/doctor.jpg',
            audioSrc: './src/assets/data/audio/doctor.mp3',
        },
        {
            word: 'ill',
            translation: 'больной',
            image: './src/assets/data/img/ill.jpg',
            audioSrc: './src/assets/data/audio/ill.mp3',
        },
        {
            word: 'pill',
            translation: 'таблетка',
            image: './src/assets/data/img/pills.jpg',
            audioSrc: './src/assets/data/audio/pills.mp3',
        },
        {
            word: 'nurse',
            translation: 'медсестра',
            image: './src/assets/data/img/nurse.jpg',
            audioSrc: './src/assets/data/audio/nurse.mp3',
        },
        {
            word: 'pulse',
            translation: 'пульс',
            image: './src/assets/data/img/pulse.jpg',
            audioSrc: './src/assets/data/audio/pulse.mp3',
        },
        {
            word: 'braces',
            translation: 'брекеты',
            image: './src/assets/data/img/braces.jpg',
            audioSrc: './src/assets/data/audio/braces.mp3',
        },
        {
            word: 'thermometer',
            translation: 'градусник',
            image: './src/assets/data/img/thermometer.jpg',
            audioSrc: './src/assets/data/audio/thermometer.mp3',
        },
    ],
];

export {
    correctAudioSrc,
    errorAudioSrc,
    failureAudioSrc,
    successAudioSrc,
    cards,
    categories,
};

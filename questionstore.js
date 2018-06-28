//stores all question data as an object literal array with properties for question text: answer1: - answer4: correct answer: using separate JS file for site logic

const questionsSTORE = [

    //array index 0
    {
        question: 'Digital Audio files come in various formats and file types. Which of follow is NOT a Digital Audio file?',
        answer1: 'mysong.mp3',
        answer2: 'onehitwonder.flac',
        answer3: 'masterpiece.wav',
        answer4: 'workinprogress.psd',
        correctAnswer: 'workinprogress.psd'
    },
    //array index 1
    {
        question: 'Choose the best answer. Digital Audio file compression...',
        answer1: 'reduces the dynamic range of the audio.',
        answer2: 'reduces the overall file size while retaining acceptable audio quality.',
        answer3: 'combines multiple audio files into a single audio file.',
        answer4: 'reduces the perceived loudness of an audio file.',
        correctAnswer: 'reduces the overall file size while retaining acceptable audio quality.'
    },
    //array index 2
    {
        question: 'Which of the following audio formats would be best used for storing an original recording in its full quality?',
        answer1: 'Lossless Compressed format such as FLAC or ALAC',
        answer2: 'Lossy Compressed format such as MP3 or AAC',
        answer3: 'Multimedia container format such as AVI or MKV',
        answer4: 'Uncompressed format such as WAV, AIFF or LPCM',
        correctAnswer: 'Uncompressed format such as WAV, AIFF or LPCM'
    },
    //array index 3
    {
        question: 'Lossless Compression formats such as FLAC & ALAC result in a reduced file size without any loss of quality. How much space do these formats take up compared to their Uncompressed originals?',
        answer1: 'About 1/10th the size',
        answer2: 'Around half or a 2:1 ratio',
        answer3: '10% reduction in size',
        answer4: 'A third of the original',
        correctAnswer: 'Around half or a 2:1 ratio'
    },
    //array index 4
    {
        question: 'How do Lossy Compression formats such as MP3 & AAC provide reductions in file size up to 80-90 percent with minimal impact on perceived audio quality?',
        answer1: 'They use Pulse Code Modulation',
        answer2: 'By expanding the Dynamic Range of the audio',
        answer3: 'By exploiting Psychoacoustics',
        answer4: 'They compress the audio multiple times',
        correctAnswer: 'By exploiting Psychoacoustics'
    },
    //array index 5
    {
        question: 'With their small file size, Lossy formats are ideal for streaming services which often use different quality files measured by Bit-Rate in kilobits per second (kbps). What is the highest Bit Rate for an MP3 file?',
        answer1: '128kbps',
        answer2: '256kbps',
        answer3: '1000kbps',
        answer4: '320kbps',
        correctAnswer: '320kbps'
    },
    //array index 6
    {
        question: 'Most modern Digital Audio formats support Metadata; tags that hold information about the audio in the file. What is the format for audio Metadata?',
        answer1: 'EXIF',
        answer2: 'XML',
        answer3: 'ID3',
        answer4: 'OGG',
        correctAnswer: 'ID3'
    },
    //array index 7
    {
        question: 'Which one of these tags is NOT found in typical ID3 metadata?',
        answer1: 'Album',
        answer2: 'Track',
        answer3: 'Year',
        answer4: 'Record Label',
        correctAnswer: 'Record Label'
    },
    //array index 8
    {
        question: 'Audio is digitally recorded with a predefined Sample-Rate & Bit-Depth. Sample-Rate specifies how many times the audio is sampled per second during recording and is measured in kilohertz (kHz). Bit-Depth specifies how many bits of data each sample takes up in memory. What is the standard recording settings for CD quality audio?',
        answer1: '192 kHz at 24 bits',
        answer2: '44.1 kHz at 16 bits',
        answer3: '96 kHz at 32 bits',
        answer4: '48 kHz at 16 bits',
        correctAnswer: '44.1 kHz at 16 bits'
    },
    //array index 9
    {
        question: 'What process must a Digital Audio signal go through in order to be heard on a playback system such as headphones or loudspeakers?',
        answer1: 'Sample Rate Converstion',
        answer2: 'Analog to Digital Conversion (ADC)',
        answer3: 'Audio waveform compression',
        answer4: 'Digital to Analog Conversion (DAC)',
        correctAnswer: 'Digital to Analog Conversion (DAC)'
    }
]
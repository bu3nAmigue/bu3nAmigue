import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wav

fs=44100
duration = 5
myrecording = sd.rec(duration * fs, samplerate=fs, channels=2,dtype='float64',device=8)

sd.wait()

while True:
	sd.play(myrecording, fs,device=8)
	sd.wait()

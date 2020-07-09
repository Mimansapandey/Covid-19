#use git clone before execution 
import pandas as pd
import numpy as np
import matplotlib as plt
import seaborn as sns
dataset = pd.read_csv('Helpline_numbers.csv')
dataset
df=dataset.drop(dataset.index[28])
df
from sklearn.preprocessing import LabelEncoder  
le = LabelEncoder()  
df['__State']= le.fit_transform(df['__State'])
df
df.to_csv('Helpline_Numbers.csv')

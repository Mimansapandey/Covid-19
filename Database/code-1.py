#use git clone in terminal before executing these commands
import numpy as np
import pandas as pd
import seaborn as sns 
import matplotlib as plt
from numpy import nan

dataset = pd.read_csv('run_results.csv')
dataset
df = dataset.replace(np.nan,0)
df
import pandas as pds   
# After importing the required data 
print(df) 
from sklearn.preprocessing import LabelEncoder  
le = LabelEncoder()  
df['__Countries']= le.fit_transform(df['__Countries'])
df.to_csv('covid.csv')

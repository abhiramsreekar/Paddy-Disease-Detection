import streamlit as st
import tensorflow as tf

st.set_option('deprecation.showfileUploaderEncoding',False)
# @st.cache_data(allow_output_mutation=True)
def load_model():
    model=tf.keras.models.load_model('./my_model.h5')
    return model
model=load_model()
st.write("""
        Rice Crop Disease Detection
        """)

file=st.file_uploader("Please upload the leaf's image",type=["jpg","png"])
import cv2
from PIL import Image,ImageOps
import numpy as np
def import_and_predict(image_data,model):
    size=(64,64)
    image=ImageOps.fit(image_data,size,Image.ANTIALIAS)
    img=np.asarray(image)
    img_reshape=img[np.newaxis,...]
    prediction=model.predict(img_reshape)
    return prediction

if file is None:
    st.text("Please upload an image file")
else:
    image=Image.open(file)
    image = image.convert('RGB')
    st.image(image,use_column_width=True)
    predictions=import_and_predict(image,model)
    class_names=['Bacterialblight', 'Blast', 'Brownspot',"Healthy","Tungro"]
    st.text("This image most likely is "+class_names[np.argmax(predictions[0])])
    print(predictions)
    print(class_names[np.argmax(predictions[0])])

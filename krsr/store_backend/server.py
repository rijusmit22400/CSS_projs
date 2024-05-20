from flask import Flask
from sqlalchemy import create_engine
engine = create_engine(f'mysql://riju:$whiteknight28@localhost/krsr_store', echo = True)

conn = engine.connect()


from sqlalchemy import Table, Column, Integer, String, MetaData, Double, ForeignKey, Date

conn.commit()

app = Flask(__name__)

app.run(host='localhost', port=5000)
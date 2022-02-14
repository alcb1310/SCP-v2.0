import mysql.connector as mysql

def mueveProveedor():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()
    try:
        query = ('''
            select proveedor_cod, proveedor_ruc, proveedor_nom, proveedor_contacto, proveedor_telefono, proveedor_mail from tbl_proveedor
        ''')
        cur.execute(query)
        for proveedor_cod, proveedor_ruc, proveedor_nom, proveedor_contacto, proveedor_telefono, proveedor_mail in cur:
            insert= ("""
                    insert into proveedor (id, ruc, nombre, contacto, telefono, email) values 
                    (""")
            insert = insert + str(proveedor_cod) + ", '" + proveedor_ruc + "', '" + proveedor_nom + "', '"+ proveedor_contacto+"', '"+ proveedor_telefono+"', '"+proveedor_mail+"')"
            cur2.execute(insert)
        db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def mueveObra():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
         query = "select obra_cod, obra_name, obra_casas, obra_activo from tbl_obra"
         cur.execute(query)
         for obra_cod, obra_name, obra_casas, obra_activo in cur:
              insert = "insert into obra (id, nombre, casas, activo) values ("
              insert = insert + str(obra_cod) + ', "' + obra_name + '", ' +str(obra_casas) + ', ' + str(obra_activo) + ")"
              cur2.execute(insert)
         db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

def muevePartida():
    db = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='controlpresupuestario2')
    db2 = mysql.connect(host = 'localhost', port='8889', user = 'root', passwd = 'root', database='scp')

    cur = db.cursor()
    cur2 = db2.cursor()

    try:
         query = "select partida_cod, partida_nom, partida_acum, partida_nivel from tbl_partida"
         cur.execute(query)
         for partida_cod, partida_nom, partida_acum, partida_nivel in cur:
              insert = "insert into partida (codigo, nombre, acumula, nivel) values ("
              insert = insert + "'" + partida_cod + "', '" + partida_nom + "', " +str(partida_acum) + ", " + str(partida_nivel) + ")"
              cur2.execute(insert)
         db2.commit()
    except mysql.Error as e:
            # Rolling back in case of error
            db2.rollback()
            print ("tbl_proveedor MySQL Error: %s" % str(e))

# mueveProveedor()
# mueveObra()
muevePartida()
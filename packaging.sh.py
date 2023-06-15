import json, os
conf = json.load( open('./code/info.json') )
os.system('zip -q -r ' + conf['id'] + '@' + conf['version'] + '.ccx ./code')
